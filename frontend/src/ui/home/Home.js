import {Technologies} from "../shared/components/Technologies"
import {AboutMe} from "../shared/components/AboutMe"

export const Home = () => {
    return (
        <>
        <div className="container mx-auto md:flex">
            <AboutMe className="min-w-lg flex-1"/>
            <Technologies/>
        </div>
        </>
    )
}