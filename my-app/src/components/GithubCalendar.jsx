import { GitHubCalendar } from "react-github-calendar"

function GithubCalendar() {

    return(
        <div className="w-full max-w-lg overflow-x-auto">
            <GitHubCalendar username="saranillozed55" blockMargin={4} blockSize={10}/>
        </div>
    );
}

export default GithubCalendar