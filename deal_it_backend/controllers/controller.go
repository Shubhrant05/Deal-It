package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/Shubhrant05/Deal-It/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"net/http"
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
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
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
	enableCors(&w)
	var credentials models.Student
	err := json.NewDecoder(r.Body).Decode(&credentials)
	// fmt.Println(credentials)
	// resp := make(map[string]string)
	if err != nil {
		log.Fatal(err)
	}
	var data models.Student
	filter := bson.D{{"email", credentials.Email}}
	err = studentCollection.FindOne(context.Background(), filter).Decode(&data)
	if err != nil {
		// resp["status"] = "404"
		// resp["message"] = "Signup Unsuccessful"
		json.NewEncoder(w).Encode(401)
	} else {
		if data.Password == credentials.Password {
			// resp["status"] = "200"
			// resp["message"] = "Success"
			// json.NewEncoder(w).Encode("Login Successfull!")
			json.NewEncoder(w).Encode(200)
		} else {
			// resp["status"] = "401"
			// resp["message"] = "Signup Unsuccessful"
			json.NewEncoder(w).Encode(400)
		}
	}
	// res, err := json.Marshal(resp)
	// w.Write(res)
}

// Controller for registering new user
func RegisterStudent(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	var data models.Student
	err := json.NewDecoder(r.Body).Decode(&data)
	// json.NewEncoder(w).Encode(data)
	resp := make(map[string]string)
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
		resp["status"] = "200"
		resp["message"] = "Authorized"
		json.NewEncoder(w).Encode(insertData.InsertedID)
	} else {
		resp["status"] = "401"
		resp["message"] = "Unauthorized"
		json.NewEncoder(w).Encode("User already exists!")
	}
	res, err := json.Marshal(resp)

	w.Write(res)
}

// Controller to post new complaint
func PostComplaint(w http.ResponseWriter, r *http.Request) {
	var data models.Complaints
	err := json.NewDecoder(r.Body).Decode(&data)
	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		log.Fatal(err)
	}

	resp := make(map[string]string)

	r.ParseForm()
	hash := data.Category + data.HallName + data.RaisedBy.Email
	data.Hash = hash
	var newComplaint models.Complaints
	filter := bson.D{{"hash", hash}}
	existingComplaint := complaintsCollection.FindOne(context.Background(), filter).Decode(&newComplaint)
	if existingComplaint != nil {
		insertData, err := complaintsCollection.InsertOne(context.Background(), data)
		if err != nil {
			fmt.Println(err)
			return
		}
		resp["status"] = "200"
		resp["message"] = "Success"
		json.NewEncoder(w).Encode(insertData.InsertedID)
	} else {
		json.NewEncoder(w).Encode("User already exists!")
		resp["status"] = "401"
		resp["message"] = "User already exists!"
	}
	res, err := json.Marshal(resp)
	w.Write(res)
}

// Controller to get all due complaints
func GetAllComplaints(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	var dueComplaints []models.Complaints
	filter := bson.D{{}}
	data, err := complaintsCollection.Find(context.Background(), filter)

	if err != nil {
		log.Fatal(err)
		w.WriteHeader(404)
	}

	for data.Next(context.Background()) {
		var complaints models.Complaints
		err := data.Decode(&complaints)

		if err != nil {
			log.Fatal(err)
		}

		dueComplaints = append(dueComplaints, complaints)
	}

	json.NewEncoder(w).Encode(dueComplaints)
}
