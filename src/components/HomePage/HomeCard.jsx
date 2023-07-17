import React from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import uniDefault from "../../assets/uni.jpg";
import uniDefault from '../../assets/uni.jpg'
import CardSlider from "./CardSlider"
import "../Style/HomeCard.css";
import { Link } from "react-router-dom";
const HomeCard = ({ item }) => {
  // const firstImage = item.images[0];


const HomeCard = ({item}) => {




  return (
    <Container className="p-3  rounded-2 " style={{ position: "relative" }}>
      <Card style={{ width: "100%", height: "25rem" }}>
        {/* <Card.Img
          variant="top"
          style={{ width: "100%", height: "60%" }}
          // src={firstImage}
          src={uniDefault}
          className="relative"

        />
        <Link to="/login">
          <Button
            variant="light"
            size="lg"
            className="h-20 p-1 px-2 rounded-1 border-0 d-flex flex-nowrap"
            style={{ position: "absolute", top: "190px", right: "10px" }}
          >
            <i
              className="fa-solid p-1 fa-rotate-right fa-md"
              style={{ color: "blue" }}
            ></i>
            <span className="mx-1"></span>
            Compare
          </Button>
        </Link>

        /> */}
<div style={{ width: "100%", height: "60%" }}    >
        <CardSlider />
       </div>

        <button
          className=" h-20 p-1 px-2 rounded-1 border-0 d-flex flex-nowrap bg-light"
          style={{ position: "absolute", top: "190px", right: "10px" }}
        >
          <i className="fa-solid p-1 fa-rotate-right fa-md" style={{ color: "blue" }}></i>
          <span className="mx-1"></span>
          Compare
        </button>

        <Card.Body
          className="d-flex justify-content-between w-100 "
          style={{ height: "30%" }}
        >
          <div className="left ">
            <Card.Title className="text-start text-primary fs-6">
              <Link
                key={item.id}
                to={`/universities/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {item.faculty.en}
              </Link>
            </Card.Title>
            <Card.Text className="desc text-start  text-muted">
              {" "}
              {item.university.en}
            </Card.Text>
          </div>
          <div className=" h-25  d-flex align-items-center justify-content-center p-2">
            <Link to="/login">
              <i class="bi bi-heart-fill" style={{ color: "blue" }}></i>
            </Link>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush w-100">
          <ListGroup.Item>
            <div className="d-flex text-info justify-content-between p-1 ">
              <div className="left d-flex flex-nowrap ">
                <i class="bi bi-geo-alt-fill "></i>
                <span className="mx-1"></span>
                {item.city.en}
              </div>
              <div className="right d-flex flex-nowrap">
                <i class="bi bi-cash"></i>
                <span className="mx-1"></span>
                /years
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default HomeCard;
