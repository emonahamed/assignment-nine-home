import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h5>1.What is the purpose of react router?</h5>
                <p>Ans : React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div>
                <h5>1.How does context Api Works?</h5>
                <p> Ans : In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>
            <div>
                <h5>1.What do you understand by UseRef Hook?</h5>
                <p>Ans :The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>

        </div>
    );
};

export default Blog;