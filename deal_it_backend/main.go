package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Shubhrant05/Deal-It/controllers"
	"github.com/Shubhrant05/Deal-It/router"
)

const connUrl = "mongodb+srv://dealit:dealit@cluster0.xlb9egg.mongodb.net/?retryWrites=true&w=majority"

func main() {

	controllers.Connection(connUrl)
	r:=router.Router();
	fmt.Println("Server is up and running!")
	log.Fatal(http.ListenAndServe(":4000",r))
}