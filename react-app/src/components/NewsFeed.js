import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    // Post Action Icons
    faHeart,
    faEllipsisV,
    faComments
} from '@fortawesome/free-solid-svg-icons'
import * as outlineIcon from '@fortawesome/free-regular-svg-icons'
import { posts } from './../data/data'

export function NewsFeed(props) {
    const [data, setData] = React.useState(posts);
    return (
        <section>
            <h2 className="text-center">News Feed</h2>
            <PostInput data={data} SetData={setData} />
            <PostContainer data={data} />
        </section>
    )
}

function PostInput(props) {
    const [news, setNews] = React.useState("");

    const inputChange = (event) => {
        setNews(event.target.value);
    }

    // post data contains id, userId, content, img, datePosted, like, comments
    const onPost = (event) => {
        const postInfo = {
            id = "post" + (props.data.length + 1),
            userId: currentUser.id,
            content: news,
            img: "",
            datePosted: new Date().toString(),
            like: false,
            comments: []
        }
        const copyDate = { ...props.data };
        copyDate.push(postInfo);
        props.setdata(copyDate);
    }

    return (<div class="post-input" onChange={inputChange}>
        <input value={news} type="text" placeholder="How are you doing today?" />
        <button onClick={onPost} id="post-btn" disabled={news.length === 0}>Post</button>
    </div>)

    function PostContainer(props) {

        const sortByPostedDesc = (postA, postB) => {
            const dateA = new Date(postA.datePosted);
            const dateB = new Date(postB.datePosted);
            return dateB - dateA;
        }


        let postComponents = props.ap((postInfo) => {
            const user = users[postInfo.userID];
            return <Post profilePic={user.profileImg}
                name={user.name} datePosted={postInfo.name}
                content={postInfo.content} />;
        })

        return null;
    }

    function Post(props) {

        /*
        <div class="post-container">
            <div class="post" id="al">
                <div class="profile-img">&nbsp;</div>
                <div class="post-content">
                    <p class="bold">Al</p>
                    <p>Yesterday</p>
                    <p>Just did a million push ups today, feeling great!</p>
                </div>
                <div class="post-actions">
                    <i class="fas fa-ellipsis-v"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-comments"></i>
                </div>
            </div>
            <div class="post-comments">
                <div class="comment">
                    <div class="profile-img">&nbsp;</div>
                    <div class="comment-content">
                        <p class="bold">Al</p>
                        <p>I meant to say 2 million 😏</p>
                    </div>
                </div>
            </div>
        </div>
         */

        const profilePicture = {
            backgroundImage: `url("../img/profile/${props.profilePicture}")`
        }
        return (
            <div class="post" id="al">
                <div class="profile-img">&nbsp;</div>
                <div class="post-content">
                    <p class="bold">{props.name}</p>
                    <p>{props.datePosted}</p>
                    <p>{props.content}</p>
                    <p>Just did a million push ups today, feeling great!</p>
                </div>
                <div class="post-actions">
                    <FontAwesomeIcon icon={faEllipsisV} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faComments} />
                    <i class="fas fa-ellipsis-v"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-comments"></i>
                </div>
            </div>
        );

        function Comment(props) {

            let style = {
                backgroundImage: `url('../img/profile/${props.originUserPost.profileImg}')`
            }

            return <div className="comment">
                <div className="profile-img" style={style}>&nbsp;</div>
                <div className="comment-content">
                    <p className="bold">{props.originUserPost.name}</p>
                    <p>{props.content}</p>
                </div>
            </div>;
        }
    }
}