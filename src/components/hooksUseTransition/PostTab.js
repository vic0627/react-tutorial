import { memo } from "react";

const PostTab = memo(function PostTab() {
    let items = [];

    for (let i = 0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }

    return <ul className="items">{items}</ul>;
});

const SlowPost = ({ index }) => {
    let startTime = performance.now();

    while (performance.now() - startTime < 1) {}

    return <li className="item">Post #{index + 1}</li>;
};

export default PostTab;
