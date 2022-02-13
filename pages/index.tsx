import { GetServerSideProps } from "next"

const Home = (): JSX.Element => {
  return (
    <div>index</div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      isSession: true,
    },
    redirect: {
      destination: '/anna'
    }
  }
}

export default Home
