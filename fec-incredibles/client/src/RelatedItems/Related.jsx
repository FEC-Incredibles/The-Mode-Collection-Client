import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import axios from "axios";
import testData from "./ExampleData/relatedProducts.json";
import DownArrowIcon from "../SVGs/DownArrowIcon.jsx";
import UpArrowIcon from "../SVGs/UpArrowIcon.jsx";

const Related = ({
  currentItemID,
  type,
  outfit,
  setOutfit,
  setCurrentItemID,
}) => {
  const [activeItem, setActiveItem] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  if (type === "Related") {
    useEffect(() => {
      let related;
      let details = {};
      if (currentItemID) {
        axios({
          method: "get",
          url: `/products/${currentItemID}/related`,
        })
          .then((element) => {
            related = element.data;
            return axios({
              method: "get",
              url: `/products/${currentItemID}`,
            });
          })
          .then((element) => {
            let incomingFeatures = element.data.features;
            for (var i = 0; i < incomingFeatures.length; i++) {
              details[incomingFeatures[i]["feature"]] =
                incomingFeatures[i].value;
            }
            return axios({
              method: "get",
              url: `/relatedItems/?relatedIDs=${JSON.stringify(
                related
              )}&currentFeatures=${JSON.stringify(details)}`,
            });
          })
          .then((element) => {
            setRelatedProducts(element.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [currentItemID]);
  } else {
    useEffect(() => {
      let related;
      let details = {};
      if (currentItemID) {
        axios({
          method: "get",
          url: `/products/${currentItemID}`,
        })
          .then((element) => {
            let incomingFeatures = element.data.features;
            for (var i = 0; i < incomingFeatures.length; i++) {
              details[incomingFeatures[i]["feature"]] =
                incomingFeatures[i].value;
            }
            return axios({
              method: "get",
              url: `/relatedItems/?relatedIDs=${JSON.stringify(
                outfit
              )}&currentFeatures=${JSON.stringify(details)}`,
            });
          })
          .then((element) => {
            setRelatedProducts(element.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [outfit]);
  }

  const updateItem = (newItem) => {
    if (newItem < 0) {
      newItem = 0;
    } else if (newItem >= relatedProducts.length / 2) {
      newItem = relatedProducts.length / 2 - 1;
    }
    setActiveItem(newItem);
  };
  return (
    <div className="widget brianWidget" id={module}>
      <h1>{type} Products</h1>
      <div className="carouselItems">
        {activeItem > 0 ? (
          <div
            id="backClick"
            className="navButtons"
            onClick={() => {
              updateItem(activeItem - 1);
            }}
          >
            <UpArrowIcon />
          </div>
        ) : (
          <div
            id="backClick"
            className="navButtons"
            style={{ visibility: "hidden" }}
          >
            <UpArrowIcon />
          </div>
        )}
        <div className="relatedCarousel">
          <div
            className="viewPort"
            style={{ transform: `translateY(-${activeItem * 40}%)` }}
          >
            {relatedProducts.map((item, index) => {
              return (
                <Card
                  item={item}
                  key={index}
                  setCurrentItemID={setCurrentItemID}
                  type={type}
                  setOutfit={setOutfit}
                />
              );
            })}
          </div>
        </div>
        {activeItem <= relatedProducts.length / 2 - 1 ? (
          <div
            id="forwardClick"
            className="navButtons"
            onClick={() => {
              updateItem(activeItem + 1);
            }}
          >
            <DownArrowIcon />
          </div>
        ) : (
          <div
            id="forwardClick"
            className="navButtons"
            style={{ visibility: "hidden" }}
          >
            <DownArrowIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Related;
