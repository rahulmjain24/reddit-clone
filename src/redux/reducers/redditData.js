import { DOWN_VOTE, QUERY, UP_VOTE } from "../actionTypes";
import moment from "moment";

const initialState = {
    query: '',
    posts : [
        {
            id: 1,
            title: 'Those who travel on train for 24 hours or more, how do you pass the time? What about food? Would it be bad and upset your stomach?',
            post: "I will be traveling alone in AC 3 tier coach. The duration is nearly 27 hours. Thinking of ways how I could pass the time. Would it be safe to keep my laptop bag in my seat when I go to toilet? I am also little concerned about food. Heard that food will not be good from family members. Maybe it's in the past. The current situation would have got better. Anyways, open for suggestions and tips.",
            subReddit: 'india',
            user: 'TodayEasy948',
            votes: 207,
            time: moment("2023-01-15", "YYYY-MM-DD"),
            comments: 95,
            image: '',
            rImage: 'https://styles.redditmedia.com/t5_2qh1q/styles/communityIcon_9ggb2zkszbf91.png?width=256&v=enabled&s=d19a33f79f962735225df7d9eea689c513ee3533'
            
        },
        {
            id: 2,
            title: 'future network of namma metro would look something like this',
            post: "",
            subReddit: 'bangalore',
            user: 'chipkali_lover',
            votes: 453,
            time: moment("2023-01-1", "YYYY-MM-DD"),
            comments: 118,
            image: 'https://i.redd.it/0nt7xr818efa1.png',
            rImage: 'https://styles.redditmedia.com/t5_2qhvf/styles/communityIcon_pulpp8crshh91.png?width=256&v=enabled&s=184efbe79943f34f8993de092e06da451d32825e'
            
        },
        {
            id: 3,
            title: "How does a person's credit score get affected by consistently and promptly completing GST returns?",
            post: "An individual's creditworthiness is represented numerically by their credit score. Banks, lenders, and other financial organizations use it to evaluate the risk involved in making a loan or providing credit. To be eligible for loans and other types of credit, like credit cards and mortgages, a person must have a high credit score.The consistency and promptness with which GST returns are filed might improve a person's credit rating. A person's dedication to fulfilling financial responsibilities and prudently managing their business finances is shown by their timely submission of GST returns. Their credit score benefits as a result of this.Additionally, to determine a person's creditworthiness, banking organizations and credit bureaus frequently use data from the GST system. An individual may make sure that their financial information is current and appropriately displayed in their credit score by constantly completing GST returns on time. A better credit score and easier access to credit may result from this.In conclusion, timely and regular GST return filing is essential for preserving a high credit score. It serves as evidence of a person's sound money management and contributes to the accuracy and timeliness of their credit reports. Their future prospects of obtaining credit and loans may thus be improved as a result.",
            subReddit: 'IndiaTax',
            user: 'aakashparikh1',
            votes: 1,
            time: moment("2022-12-21", "YYYY-MM-DD"),
            comments: 4,
            image: '',
            rImage: 'https://styles.redditmedia.com/t5_2mvcfn/styles/communityIcon_clse7vbu9sw41.jpg?width=256&format=pjpg&v=enabled&s=12ed50694957b83cf4adcc8f9f4b975c161c0731'
            
        },
        {
            id: 4,
            title: "we're currently debating whether these are yellow or orange at our store",
            post: "",
            subReddit: 'HomeDepot',
            user: 'JKGHosty',
            votes: 630,
            time: moment("2023-01-10", "YYYY-MM-DD"),
            comments: 336,
            image: 'https://i.redd.it/sif17hkwsefa1.jpg',
            rImage: 'https://styles.redditmedia.com/t5_2tjjm/styles/communityIcon_v9qht35ddjf91.png?width=256&v=enabled&s=d029e961aa2dceaebe8a2d4796f413af8e4917ff'
            
        },
        {
            id: 5,
            title: 'You have to remove one mob, any mob from Minecraft. Who are you removing?',
            post: "",
            subReddit: 'Minecraft',
            user: 'mountaindrew000',
            votes: 11600,
            time: moment("2023-01-29", "YYYY-MM-DD"),
            comments: 3900,
            image: 'https://i.redd.it/g217bdb2eyca1.jpg',
            rImage: 'https://b.thumbs.redditmedia.com/rwN0al9P6nYhGSQO-yIJb-FyF5xg-c2v61zjMom4c4E.png'
            
        },
        {
            id: 6,
            title: 'Do you guys consider Messi to be the greatest sportsman in history?',
            post: "",
            subReddit: 'football',
            user: 'balloonz_v1',
            votes: 2900,
            time: moment("2023-02-1", "YYYY-MM-DD"),
            comments: 2700,
            image: 'https://i.redd.it/wd54pfh5fu6a1.jpg',
            rImage: 'https://styles.redditmedia.com/t5_2qkr5/styles/communityIcon_kqes2ztdbgc61.png?width=256&v=enabled&s=876259e71928ada72237b74bb9bde282beec5ed3'
            
        }
    ]
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case UP_VOTE: {
            const posts = state.posts
            const post = posts.find((post) => {
                return post.id === action.id
            })
            post.votes++
            return {
                ...state,
                posts: [
                    ...posts,
                ]
            }
        }
        case DOWN_VOTE: {
            const posts = state.posts
            const post = posts.find((post) => {
                return post.id === action.id
            })
            post.votes--
            return {
                ...state,
                posts: [
                    ...posts,
                ]
            }
        }
        case QUERY: {
            return {
                ...state,
                query: action.query
            }
        }
        default:
            return state;
    }
}
