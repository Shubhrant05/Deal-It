package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/Shubhrant05/Deal-It/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var database *mongo.Database
var studentCollection *mongo.Collection
var complaintsCollection *mongo.Collection
var caretakerCollection *mongo.Collection
// Creating Controllers
func Connection(connUrl string) {
	newClient := options.Client().ApplyURI(connUrl)

	client, err := mongo.Connect(context.Background(), newClient)
	if err != nil {
		log.Fatal(err)
	}
	database = client.Database("Deal-It")
	studentCollection = database.Collection("Student")
	caretakerCollection = database.Collection("Caretaker")
	complaintsCollection = database.Collection("Complaints")
	fmt.Println("MongoDB connection established!")

}

func HomePage(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Welcome to deal-it backend!</h1>"))
}

// Controller for getting all users
func GetAllUsers(w http.ResponseWriter, r *http.Request) {
	var users []models.Student
	data, err := studentCollection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	for data.Next(context.Background()) {
		var student models.Student
		err := data.Decode(&student)

		if err != nil {
			log.Fatal(err)
		}
		users = append(users, student)
	}
	json.NewEncoder(w).Encode(users)
}

// Controller for verifying login credentials
func VerifyUser(w http.ResponseWriter, r *http.Request) {
	var credentials models.Student
	err := json.NewDecoder(r.Body).Decode(&credentials)
	// fmt.Println(credentials)
	if err != nil {
		log.Fatal(err)
	}
	var data models.Student
	filter := bson.D{{"email", credentials.Email}}
	err = studentCollection.FindOne(context.Background(), filter).Decode(&data)
	if err != nil {
		json.NewEncoder(w).Encode("User doesn't exists!")
	} else {
		if data.Password == credentials.Password {
			json.NewEncoder(w).Encode("Login Successfull!")
			json.NewEncoder(w).Encode(data)
		} else {
			json.NewEncoder(w).Encode("Wrong Passsword!")
		}
	}
}

// Controller for registering new user
func RegisterStudent(w http.ResponseWriter, r *http.Request) {
	var data models.Student
	err := json.NewDecoder(r.Body).Decode(&data)
	// json.NewEncoder(w).Encode(data)
	if err != nil {
		log.Fatal(err)
	}
	var user models.Student
	filter := bson.D{{"email", data.Email}}
	existingUser := studentCollection.FindOne(context.Background(), filter).Decode(&user)
	if existingUser != nil {
		insertData, err := studentCollection.InsertOne(context.Background(), data)
		if err != nil {
			fmt.Println(err)
			return
		}

		json.NewEncoder(w).Encode(insertData.InsertedID)
	}else{
		json.NewEncoder(w).Encode("User already exists!")
	}

}

