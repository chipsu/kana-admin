const Component = props => {
  return <div>DOMAIN_ID: {props.id}</div>
}

Component.getInitialProps = async ({ query }) => {
  return {
    id: query.id,
  }
}

export default Component
