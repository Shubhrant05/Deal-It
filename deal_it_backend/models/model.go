package models

import (
// "go.mongodb.org/mongo-driver/bson/primitive"
)

type Student struct {
	// ID            primitive.ObjectID `bson:"_id,omitempty"`
	RollNo        string   `json:"rollno,omitempty"`
	Name          string   `json:"name,omitempty"`
	Email         string   `json:"email,omitempty"`
	MobileNo      string   `json:"mobileno,omitempty"`
	Password      string   `json:"password"`
	Notifications []string `json:"notifications,omitempty"`
}

type Complaints struct {
	// ID          primitive.ObjectID ` bson:"_id"`
	Subject     string  `json:"subject"`
	Description string  `json:"description"`
	Date        string  `json:"date"`
	RaisedBy    Student `json:"raisedby"`
	HallName    string  `json:"hallname"`
	RoomNo      string  `json:"roomno"`
	Hash        string  `json:"hash"`
	Category    string  `json:"category"`
	IsResolved  bool    `json:"isresolved"`
}

type Caretaker struct {
	// ID            primitive.ObjectID ` bson:"_id"`
	Name          string   `json:"name"`
	Email       string   `json:"email"`
	Password      string   `json:"password"`
	HallName      string   `json:"hallname"`
	Notifications []string `json:"notifications"`
}
