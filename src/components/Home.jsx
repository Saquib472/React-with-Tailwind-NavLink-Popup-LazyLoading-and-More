import NewClassCounter from "./NewClassCounter";
import OldClassCounter from "./OldClassCounter";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <NewClassCounter name='Counter Using Functional Component' />
      <hr className="my-4"/>
      <OldClassCounter name='Counter Using Class Component' />
    </>
  )
}
