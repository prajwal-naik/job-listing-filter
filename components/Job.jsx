import styles from "../styles/Job.module.css";
import Image from 'next/image';
import { changeFeature, selectSomeFeature } from "../redux/features/someSlice"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


function Job({ company, logo, newFlag, featured, position, role, level, postedAt, contract, location, languages, tools }) {
    
    const jobFilter = [role, level].concat(languages, tools);

    const selectedFeatures = useSelector(selectSomeFeature);
    const dispatch = useDispatch();

    // console.log("line 13", selectedFeatures);

    const addTag = (newTag) => {
        dispatch(changeFeature(
            newTag
        ));
        // console.log("line 21: ", selectedFeatures);
    }


    const checkDisplay = () => {
        // console.log("jobFilter: ", jobFilter)
        // console.log("selectedFeatures: ", selectedFeatures)
        // for(var i = 0; i<jobFilter.length; i++){
        //     if(selectedFeatures.includes(jobFilter[i]))
        //         return true;
        // }
        // return false;
        const flag = true;
        // for(var i = 0; i< selectedFeatures.length; i++){
        //     if(!jobFilter.includes(selectedFeatures[i]))
        //         flag = false;
        //         // break;
        //         // return flag;
        // }
        return flag;
        
    }

    if((selectedFeatures.length === 0) || checkDisplay()){
        return (
            <div className = {styles.jobsContainer}>
                <div className = {styles.jobsContainerLeft}>
                    <div className = {styles.logoDiv}>
                        <Image src = {logo.slice(1)} layout = "fill" objectFit="contain"/>
                    </div>
                    <div className = {styles.jobDetailsDiv}>
                        <div className={styles.companyName}>
                            <p style = {{fontSize: "16px",
                                    fontWeight: "700",
                                    color: "hsl(180, 29%, 50%)", marginRight: "10px"}}>{company}</p>
    
                            <div style = {{display: "flex", flex: "1", gap: "10px"}}>
                                {newFlag && 
                                    <p style = {{
                                        paddingInline:"8px", 
                                        paddingBlock: "5px",
                                        backgroundColor: "hsl(180, 29%, 50%)", 
                                        borderRadius: "20px",
                                        fontSize: "10px",
                                        fontWeight: "900",
                                        color: "white"
                                        }}>NEW!
                                    </p>
                                }
                                {featured && 
                                    <p style = {{
                                        paddingInline:"8px", 
                                        paddingBlock: "5px",
                                        backgroundColor: "hsl(180, 14%, 20%)", 
                                        borderRadius: "20px",
                                        fontSize: "10px",
                                        fontWeight: "700",
                                        color: "white"
                                        }}>FEATURED
                                    </p>
                                }
                            </div>
                            
                        </div>
                        <div className = {styles.positionName}>
                            <p>{position}</p>
                        </div>
                        <div style = {{color: "hsl(180, 8%, 52%)", fontSize: "14px", fontWeight: "700"}}>
                            <p>{postedAt}&nbsp;•&nbsp;{contract}&nbsp;•&nbsp;{location}</p>
                        </div>
                    </div>
                </div>
                <div className = {styles.jobsContainerRight}>
                    {
                        jobFilter.map((tag) => (
                            <div key = {tag} className = {styles.tag} onClick = {() => addTag(tag)}>
                                {tag}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    else
        return null;
}

export default Job
