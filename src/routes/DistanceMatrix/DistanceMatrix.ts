import { Router } from "express";
var distance = require("hpsweb-google-distance");


const DistanceMatrixRoutes = Router();

DistanceMatrixRoutes.get("/distancematrix", async (req, res) =>  {
  const lat1 = req.body;
  const lat2 = req.body;
  const long1 = req.body;
  const long2 = req.body;
  const API_KEY = req.body;

  console.log(lat1)
  console.log(lat2)
  console.log(long1)
  console.log(long2)
  console.log(API_KEY)

  distance.apiKey = API_KEY;

  distance
  .get({
    index: 1,
    origin: lat1,long1,
    destination: lat2,long2,
    apiKey: API_KEY
  })
  .then(function (data) {
    console.log(data);
    return res.status(201).json(data);
  })
  .catch(function (err) {
    console.log(err);
  });

});






export { DistanceMatrixRoutes };


