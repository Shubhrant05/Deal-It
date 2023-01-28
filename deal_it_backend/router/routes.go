package router

import (
	"github.com/Shubhrant05/Deal-It/controllers"
	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/", controllers.HomePage).Methods("GET")
	router.HandleFunc("/login", controllers.VerifyUser).Methods("POST")
	router.HandleFunc("/getUsers", controllers.GetAllUsers).Methods("GET")
	router.HandleFunc("/signup", controllers.RegisterStudent).Methods("POST")
	router.HandleFunc("/allcomplaints", controllers.GetAllComplaints).Methods("GET")
	router.HandleFunc("/newcomplaint", controllers.PostComplaint).Methods("POST")
	return router
}
