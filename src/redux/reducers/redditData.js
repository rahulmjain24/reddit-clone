import { DOWN_VOTE, UP_VOTE } from "../actionTypes";

const initialState = {
    posts : [
        {
            id: 1,
            title: 'Those who travel on train for 24 hours or more, how do you pass the time? What about food? Would it be bad and upset your stomach?',
            post: "I will be traveling alone in AC 3 tier coach. The duration is nearly 27 hours. Thinking of ways how I could pass the time. Would it be safe to keep my laptop bag in my seat when I go to toilet? I am also little concerned about food. Heard that food will not be good from family members. Maybe it's in the past. The current situation would have got better. Anyways, open for suggestions and tips.",
            subReddit: 'india',
            user: 'TodayEasy948',
            votes: 207,
            time: '13 hours ago',
            comments: 95,
            image: ''
            
        },
        {
            id: 2,
            title: 'future network of namma metro would look something like this',
            post: "",
            subReddit: 'bangalore',
            user: 'chipkali_lover',
            votes: 453,
            time: '15 hours ago',
            comments: 118,
            image: 'https://i.redd.it/0nt7xr818efa1.png'
            
        },
        {
            id: 3,
            title: "How does a person's credit score get affected by consistently and promptly completing GST returns?",
            post: "An individual's creditworthiness is represented numerically by their credit score. Banks, lenders, and other financial organizations use it to evaluate the risk involved in making a loan or providing credit. To be eligible for loans and other types of credit, like credit cards and mortgages, a person must have a high credit score.The consistency and promptness with which GST returns are filed might improve a person's credit rating. A person's dedication to fulfilling financial responsibilities and prudently managing their business finances is shown by their timely submission of GST returns. Their credit score benefits as a result of this.Additionally, to determine a person's creditworthiness, banking organizations and credit bureaus frequently use data from the GST system. An individual may make sure that their financial information is current and appropriately displayed in their credit score by constantly completing GST returns on time. A better credit score and easier access to credit may result from this.In conclusion, timely and regular GST return filing is essential for preserving a high credit score. It serves as evidence of a person's sound money management and contributes to the accuracy and timeliness of their credit reports. Their future prospects of obtaining credit and loans may thus be improved as a result.",
            subReddit: 'IndiaTax',
            user: 'aakashparikh1',
            votes: 1,
            time: '2 hours ago',
            comments: 4,
            image: ''
            
        },
        {
            id: 4,
            title: "we're currently debating whether these are yellow or orange at our store",
            post: "",
            subReddit: 'HomeDepot',
            user: 'JKGHosty',
            votes: 630,
            time: '21 hours ago',
            comments: 336,
            image: 'https://i.redd.it/sif17hkwsefa1.jpg'
            
        },
        {
            id: 5,
            title: 'You have to remove one mob, any mob from Minecraft. Who are you removing?',
            post: "",
            subReddit: 'Minecraft',
            user: 'mountaindrew000',
            votes: 11600,
            time: '13 days ago',
            comments: 3900,
            image: 'https://i.redd.it/g217bdb2eyca1.jpg'
            
        },
        {
            id: 6,
            title: 'Do you guys consider Messi to be the greatest sportsman in history?',
            post: "",
            subReddit: 'football',
            user: 'balloonz_v1',
            votes: 2900,
            time: '1 month ago',
            comments: 2700,
            image: 'https://i.redd.it/wd54pfh5fu6a1.jpg'
            
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

        default:
            return state;
    }
}
