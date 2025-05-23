
import WAITONLINE from "../../../public/Images/waitonline-schema.png"
import TRACKER from "../../../public/Images/tracker-schema.png"


export const PROD1 =[
    {
        img_path: TRACKER,
        title: 'Tracker',
        Subtitle1: 'Track sessions',
        Body1: `This project started as a means of improving the already existing tracker. \nThis tech stack of the old used flutter, with the use of frequent load screens and time consuming user experiance. 
        \nA new version needed to be tried, not only for the user experiance but from the view of the intended user. After spending time analyzing the featured that worked well can sniffing through API calls i came up with a identicar version but with some changes.
        `,

    },
    {
        img_path: WAITONLINE,
        title: 'Waitonline',
        Subtitle1: 'Starting point, goal and result',
        Body1: `The goal from the begining was to learn amazon web serivces (aws), familiarize with a quote on quote popular web stack "MERN".\nThat is Monogdb, express js, nodejs and react. Can a user create an account? yes. Can a user setup his account based on their needs ? yes. Can the user accept appointments, waitlist request.. yes Can you send email confirmation, sms confirmations, yes. Can a user create employees, automate notifications, accept waitlist and appointments, view analytcis... yes
        At first, my architecture was a single ec2 t3.micro instance running nginx serving my frontend and also my backend application. My database is also hosted on the same machine yikes.
        After digesting microservices propaganda, thanks netflix. I decided to look for popular multi layered cloud based infastructures.
        No so much a microservice approach but rather a framework in which scalability is possible.
        I conjured up a 3 layer beefy burrito.
        In a nutshell: First layer was a single ec2 instance t2.med with nginx reverse proxy to forward API calls to my layer 2. 
        Layer 1 was also a autoscale group that can scale in the case of CPU utilization greater than 90%. 
        Note this autoscale group is completely redundant, this solution was not planned completely..
        Layer 2
        This is my protected layer, shielded away from any outside attackers. No open ports i.e just strict communication from the ec2 instance sitting on a public subnet.
        Sending emails from this layer was completed AWS SMTP, ssh was executed via VPC endpoints, downloading package dependancies was completed through a NAT instnace.
        I decided to break appart my project into to two services, client usage and business usage. Each getting their own autoscale group for the posibility of high utilization.
        Layer 3
        Database layer mongodb not much going on here.
        This stack works well if you wallet runs deep.
        Improvements: Most obviously, interpreted language vs compiled language. Learning javascript is complicated, the amount of FOR loop variants can make your head spin.
        My current project, i use golang for backend application and RDS postgres as my database. As i am now testing in local production, using grafana k6 on said project. 
        It was an eye opener when the performance of nodejs hangs over your head. 
        Note for this test i used a t2.micro (free tier)! 
        My application chewed through 10k request in 20 seconds (mostly inserts), CPU utilization maxed at ~ 27%. Safe to say i made a mistake choosing a popular youtube stack. 
        By now you should notes the bottleneck, the public instance! This can handle a decent amount of request per min, but if we assume the worst case scenario this will be big problem.
        Based on this configuration i would need to update Route 53 with a new instance accepting request from a new ec2 instance, but Domain Name System (DNS) does not naturaly load balance traffic.
        Cost to turn 4-5 burstable instances is quite high. 
        `,

    }
]