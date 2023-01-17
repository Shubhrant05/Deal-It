package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Student struct {
	ID            primitive.ObjectID `json:"_id" bson:"_id"`
	RollNo        string             `json:"roll_no"`
	Name          string             `json:"name"`
	EmailId       string             `json:"email"`
	MobileNo      string             `json:"contact_number"`
	Password      string             `json:"password"`
	Notifications []string           `json:"notification"`
}

type Complaints struct {
	ID          primitive.ObjectID `json:"_id" bson:"_id"`
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
	ID            primitive.ObjectID `json:"_id" bson:"_id"`
	Name          string             `json:"caretaker_name"`
	EmailId       string             `json:"email"`
	Password      string             `json:"password"`
	HallName      string             `json:"hostel"`
	Notifications []string           `json:"notification"`
}
