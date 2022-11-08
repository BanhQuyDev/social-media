import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";
const Stories = () => {
  const {currentUser} = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "Thanh Tùng",
      img: "https://photoscissors.com/images/samples/3-before.jpg",
    },
    {
      id: 2,
      name: "Nguyên Vũ",
      img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    },
    {
      id: 3,
      name: "Quốc Sỹ",
      img: "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000",
    },
    {
      id: 3,
      name: "Bé Rin",
      img: "https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map((story, index) => (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
