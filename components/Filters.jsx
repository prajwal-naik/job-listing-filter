import { useDispatch, useSelector } from "react-redux";
import { clearFeature, clearFeatures, selectSomeFeature } from "../redux/features/someSlice";
import styles from "../styles/Filters.module.css"
// import ReactCSSTransitionGroup from 'react-transition-group';
import FadeIn from 'react-fade-in';
function Filters() {

    const selectedFeatures = useSelector(selectSomeFeature);
    const dispatch = useDispatch();
    const removeTag = (tagName) => {
        dispatch(
            clearFeature(
                tagName
            )
        );
    }
    const clearTags = () => {
        dispatch(clearFeatures());
    }



    if(selectedFeatures.length)
        return (
            
                <div className = {styles.filters}>
                    <div className = {styles.filtersContainer}>
                        <div className = {styles.filterTags}>
                            {
                                selectedFeatures.map((filterTag) => (
                                    
                                    <FadeIn key = {filterTag}>
                                        <div className = {styles.filterTag}>
                                            <p className = {styles.filterText}>{filterTag}</p>
                                            <div className = {styles.cross} onClick ={() => removeTag(filterTag)}>x</div>
                                        </div>
                                    </FadeIn>
                                ))
                            }
                        </div>
                        
                        <div className = {styles.clear} onClick={clearTags}>Clear</div>
                    </div>
                </div>
            
            
        )
    else
        return null
}

export default Filters
