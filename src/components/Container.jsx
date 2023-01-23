import Content from "./Content"

const Container = ({data}) => {
    return (
        <div className="flex w-auto text-center justify-center items-center flex-col bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 bg-blue-500 shadow-lg shadow-blue-500/50 px-24 py-8 rounded-xl gap-x-8">
            <Content data={data} />
        </div>
    )
}

export default Container