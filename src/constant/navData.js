import HomeIcon from '../assets/home.png'
import LockIcon from '../assets/Lock.png'
import FileIcon from '../assets/file.png'
import ElasticIcon from '../assets/elastic.png'
import MovieIcon from '../assets/movie.png'
import CardIcon from '../assets/card.png'
import  S3Icon from '../assets/s3.png'
import  UserIcon from '../assets/user.png'
import  PaidIcon from '../assets/paid.png'
import  GroupIcon from '../assets/group.png'

export const NavData = [
    {
        id:1,
        title:"Home",
        image:HomeIcon,
        subLinks:[],
        route:"/admin/home"
    },
    {
        id:3,
        title:"Authentication",
        image:LockIcon,
        subLinks:[{title:"Login",route:"/admin/login"}],
        route:""
    },
    {
        id:4,
        title:"Video & Images",
        image:FileIcon,
        subLinks:[{title:"Public bucket",route:"/admin/bucket/public"},{title:"Private bucket",route:"/admin/bucket/private"}],
        route:""
    },
    {
        id:5,
        title:"Elastic Transcoder",
        image:ElasticIcon,
        subLinks:[],
        route:""
    },
    {
        id:6,
        title:"Movie",
        image:MovieIcon,
        subLinks:[{title:"Create Movie",route:"/admin/movie/create"},{title:"Catalog",route:"/admin/movie/catalog"}],
        route:""
    },
    {
        id:7,
        title:"Payment Integration",
        image:CardIcon,
        subLinks:[],
        route:"/admin/payment/integration"
    },
    {
        id:8,
        title:"S3 Cloudfront",
        image:S3Icon ,
        subLinks:[],
        route:""
    },
    {
        id:9,
        title:"User list",
        image:UserIcon,
        subLinks:[],
        route:"/admin/user/list"
    },
    {
        id:10,
        title:"List of paid users",
        image:PaidIcon,
        subLinks:[],
        route:"/admin/user/paid"
    },
    {
        id:11,
        title:"User session",
        image:PaidIcon,
        subLinks:[],
        route:""
        // /admin/user/session
    },
    {
        id:10,
        title:"User group",
        image:GroupIcon,
        subLinks:[],
        route:""
    },

]