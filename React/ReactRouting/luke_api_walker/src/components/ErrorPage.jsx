import errorImage from "../error_image.jpg";
import "../style.css";

const ErrorPage = (props) => {
    return (
        <div className="flex_col gap_1">
            <h1>{ props.errorMessage }: These are not the droids you're looking for...</h1>
            <img src={ errorImage } alt="Obi-Wan Kenobi error" />
        </div>
    );
};

export default ErrorPage;