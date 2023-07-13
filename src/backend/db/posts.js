import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "bf747aeb-57e7-4e82-9c1a-10de989b792d",
    content:
      "Just finished reading an amazing book that authored by <a href='/profile/sophiadaivs' data data-username='sophiadavis'>@sophiadaivs</a> completely blew my mind! Highly recommend it to everyone. #BookRecommendation",
    likes: {
      likeCount: 3,
      likedBy: [
        { username: "johnsmith" },
        { username: "emilyjohnson" },
        { username: "michaelbrown" },
      ],
      dislikedBy: [],
    },
    username: "parasarya",
    createdAt: "2023-06-27",
    updatedAt: formatDate(),
  },
  {
    _id: "bf747aeb-58e7-4e82-9c1a-10de989b792d",
    content:
      "Embrace the art of handcrafted beauty with Karigiri! Explore our collection of exquisite handmade crafts that add a touch of elegance to your life. #Handmade #Crafts #Artisan",
    likes: {
      likeCount: 4,
      likedBy: [
        { username: "johnsmith" },
        { username: "emilyjohnson" },
        { username: "michaelbrown" },
        { username: "parasarya" },
      ],
      dislikedBy: [],
    },
    username: "karigiri",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "bg747aeb-57e7-4e82-9c1a-10de989b792d",
    content:
      "Every stitch tells a story. At Karigir, our handwoven textiles and embroidered pieces showcase the rich cultural heritage and craftsmanship. Wrap yourself in the warmth of tradition and elegance. #Handwoven #Textiles #ArtisanCrafts",
    likes: {
      likeCount: 4,
      likedBy: [
        { username: "johnsmith" },
        { username: "emilyjohnson" },
        { username: "michaelbrown" },
        { username: "parasarya" },
      ],
      dislikedBy: [],
    },
    username: "karigiri",
    createdAt: "2023-06-27",
    updatedAt: "2023-07-11",
  },
  {
    _id: "ceec46f2-51e1-4f81-97db-6236de51e704",
    content:
      "Just watched the latest Marvel movie, and it was mind-blowing! The action, the storyline, and the special effects were top-notch. #MarvelFan",
    likes: {
      likeCount: 2,
      likedBy: [{ username: "sophiadavis" }, { username: "michaelbrown" }],
      dislikedBy: [],
    },
    username: "johnsmith",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "976be752-6cc4-4ee7-98e6-38d5ed08e3a0",
    content:
      "Just had the most delicious meal at my favorite restaurant! The flavors were incredible, and the presentation was beautiful. #Foodie",
    likes: {
      likeCount: 1,
      likedBy: [
        { username: "parasarya", _id: "ceec46f2-51e1-4f81-97db-6236de51e708" },
      ],
      dislikedBy: [],
    },
    username: "emilyjohnson",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "ad84b92a-ff14-4fe1-9124-763ccbb7083d",
    content:
      "Attended an inspiring conference today. The speakers were phenomenal, and I learned so much. Feeling motivated and ready to conquer new challenges! #PersonalGrowth",
    likes: {
      likeCount: 4,
      likedBy: [
        { username: "johnsmith" },
        { username: "emilyjohnson" },
        { username: "sophiadavis" },
        { username: "michaelbrown" },
      ],
      dislikedBy: [],
    },
    username: "michaelbrown",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-29",
  },
  {
    _id: "1e2dbd0c-0808-4d9d-a53d-7e22f066faa2",
    content:
      "Just finished a challenging coding project after hours of hard work. It feels great to see it working flawlessly. #CodingLife",
    likes: {
      likeCount: 2,
      likedBy: [{ username: "emilyjohnson" }, { username: "michaelbrown" }],
      dislikedBy: [],
    },
    username: "sophiadavis",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-30",
  },
  {
    _id: "f40d6b0e-6f6d-4814-bb5f-883c0e11e267",
    content:
      "Spent the weekend exploring a beautiful hiking trail. The views were breathtaking, and I feel so refreshed. Nature is truly amazing! #OutdoorAdventure",
    likes: {
      likeCount: 3,
      likedBy: [
        { username: "parasarya", _id: "ceec46f2-51e1-4f81-97db-6236de51e708" },
        { username: "michaelbrown" },
        { username: "sophiadavis" },
      ],
      dislikedBy: [],
    },
    username: "johnsmith",
    createdAt: "2023-06-27",
    updatedAt: "2023-07-01",
  },
  {
    _id: "f40d6b0e-6f6d-4814-bb5f-883c0e11e2678",
    content:
      "Just adopted the cutest puppy today! Meet Bella, my new furry best friend. 🐶❤️ #NewPuppy",
    likes: {
      likeCount: 5,
      likedBy: [
        { username: "emilyjohnson" },
        { username: "michaelbrown" },
        { username: "sophiadavis" },
        { username: "johnsmith" },
        { username: "parasarya", _id: "ceec46f2-51e1-4f81-97db-6236de51e708" },
      ],
      dislikedBy: [],
    },
    username: "sophiadavis",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "315a9dbd-fb52-4bdc-83e1-6af938f38b77",
    content:
      "Just completed my first half-marathon! It was an incredible experience. Proud of my accomplishment and excited to set new fitness goals. 🏃‍♂️💪 #FitnessJourney",
    likes: {
      likeCount: 3,
      likedBy: [
        { username: "johnsmith" },
        { username: "parasarya", _id: "ceec46f2-51e1-4f81-97db-6236de51e708" },
        { username: "sophiadavis" },
      ],
      dislikedBy: [],
    },
    username: "emilyjohnson",
    createdAt: "2023-06-25",
    updatedAt: "2023-06-25",
  },
  {
    _id: "9b4d3e35-d6df-4e36-91a5-9e9f3db8fb55",
    content:
      "Just launched my own business! It's been a long journey, but I'm excited to embark on this new chapter. If you're interested in handmade crafts, check out <a href='/profile/@karigiri' data data-username='karigiri'>@karigiri</a>. #Entrepreneur",
    likes: {
      likeCount: 2,
      likedBy: [{ username: "michaelbrown" }, { username: "sophiadavis" }],
      dislikedBy: [],
    },
    username: "parasarya",
    createdAt: "2023-05-27",
    updatedAt: "2023-05-27",
  },
  {
    _id: "12e78a8f-53ea-43c7-9c85-bddad8b9c67d",
    content:
      "Just returned from an incredible trip to Paris. The architecture, the food, and the art were simply amazing. Missing the city already! #TravelDiaries",
    likes: {
      likeCount: 4,
      likedBy: [
        { username: "sophiadavis" },
        { username: "emilyjohnson" },
        { username: "johnsmith" },
        { username: "michaelbrown" },
      ],
      dislikedBy: [],
    },
    username: "johnsmith",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-12",
  },
  {
    _id: "c8c3f2af-4c07-4ad6-9791-43b82d0a8160",
    content:
      "Just finished an amazing art project! It took hours of dedication, but the result is absolutely worth it. Sharing my artwork with you all. #ArtisticPassion",
    likes: {
      likeCount: 1,
      likedBy: [{ username: "michaelbrown" }],
      dislikedBy: [],
    },
    username: "emilyjohnson",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-02",
  },
];
