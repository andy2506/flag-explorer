export default function Spinner() {
    return (
        <div className="flex justify-center items-center h-40" role="status">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
    );
}