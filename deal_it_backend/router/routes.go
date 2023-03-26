package router

import (
	"github.com/Shubhrant05/Deal-It/controllers"
	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/", controllers.HomePage).Methods("GET")
	router.HandleFunc("/login", controllers.VerifyUser).Methods("POST")
	router.HandleFunc("/caretaker", controllers.VerifyCaretaker).Methods("POST")
	router.HandleFunc("/getOneStudent", controllers.GetOneStudent).Methods("POST")
	router.HandleFunc("/getOneCaretaker", controllers.GetOneCaretaker).Methods("POST")
	router.HandleFunc("/getUsers", controllers.GetAllUsers).Methods("GET")
	router.HandleFunc("/signup", controllers.RegisterStudent).Methods("POST")
	router.HandleFunc("/allcomplaints", controllers.GetAllComplaints).Methods("GET")
	router.HandleFunc("/newcomplaint", controllers.PostComplaint).Methods("POST")
	router.HandleFunc("/updateProfile", controllers.UpdateProfile).Methods("POST")
	router.HandleFunc("/updateresolvestatus", controllers.UpdateResolveStatus).Methods("POST")
	return router
}
