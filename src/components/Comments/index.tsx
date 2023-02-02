import GiscusComponent from "./Giscus"
import { mapping } from "@/config/comment";
const Comments = () => {
    return (
        <GiscusComponent mapping={mapping} />
    );
};

export default Comments;
