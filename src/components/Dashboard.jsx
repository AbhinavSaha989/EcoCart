import ImpactCard from "./dashboard/ImpactCard";
import Goalbar from "./dashboard/Goalbar";
const Dashboard =() => {
    return <div className="flex flex-col items-center p-10 bg-green-200">
        <div className="flex flex-col items-center w-[40vw] gap-[20px] tex-center bg-white rounded-lg">
            <h2 className="text-green-600 font-bold mt-4">Your impact this month</h2>
            <ImpactCard />

            <Goalbar />
        </div>
        <div className="flex flex-col items-center bg-white mt-10 py-5 rounded-lg w-[40vw]">
            <h3 className="font-bold text-green-600">Eco Achievements</h3>
            <div className="flex flex-wrap mt-4 gap-4">
                <p className="text-sm text-green-800 font-semibold bg-green-300 rounded-full px-2 py-1">Plastic Free Week</p>
                <p className="text-sm text-blue-800 font-semibold bg-blue-300 rounded-full px-2 py-1">Offset Hero</p>
                <p className="text-sm text-yellow-800 font-semibold bg-yellow-300 rounded-full px-2 py-1">Zero Waste Day</p>
                
            </div>
        </div>
    </div>
}

export default Dashboard;