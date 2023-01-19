package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Student struct {
	ID            primitive.ObjectID `bson:"_id,omitempty"`
	RollNo        string             `json:"rollno,omitempty"`
	Name          string             `json:"name,omitempty"`
	Email         string             `json:"email,omitempty"`
	MobileNo      string             `json:"contact,omitempty"`
	Password      string             `json:"password"`
	Notifications []string           `json:"notification,omitempty"`
}

type Complaints struct {
	ID          primitive.ObjectID ` bson:"_id"`
	Subject     string             `json:"complaint_title"`
	Description string             `json:"description"`
	Date        string             `json:"date"`
	RaisedBy    Student            `json:"raised_by"`
	HallName    string             `json:"hostel"`
	RoomNo      string             `json:"room"`
	Category    string             `json:"category"`
	IsResolved  bool               `json:"status"`
}

type Caretaker struct {
	ID            primitive.ObjectID ` bson:"_id"`
	Name          string             `json:"caretaker_name"`
	EmailId       string             `json:"email"`
	Password      string             `json:"password"`
	HallName      string             `json:"hostel"`
	Notifications []string           `json:"notification"`
}
