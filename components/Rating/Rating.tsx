import { RatingProps } from "./Rating.Props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import { useEffect, useState, KeyboardEvent } from "react";

export const Rating = ({isAditable = false, rating, setRating, ...props} : RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(()=> {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled] : i < currentRating,
                        [styles.editable] : isAditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        
                        tabIndex={isAditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isAditable && handleSpace(i + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if(!isAditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if(!isAditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if(e.code !== "Space" && e.code !== "Enter" || !setRating){
            return;
        }
        setRating(i);
    };

    return(
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>) )}
        </div>
    );
};