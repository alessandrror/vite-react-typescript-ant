import { ConfigProvider, Button } from "antd"
import { Link } from "react-router-dom"

const theme = {
  components: {
    Button: {
      defaultBg: '#164e63',
      defaultColor: '#ffffff',
      defaultActiveBg: '#164e63',
      defaultHoverBg: '#203e49',
      defaultHoverColor: '#ffffff',
      defaultHoverBorderColor: '#164e63'
    }
  }
}

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center bg-white h-dvh">
      <h2 className="text-9xl text-cyan-900">404</h2>
      <h3 className="text-4xl text-cyan-700 mb-5">Resource doesn't exist</h3>
        <ConfigProvider theme={theme}>
          <Button type="default" size="large">
            <Link to="/login">
              Go back
            </Link>
          </Button>
        </ConfigProvider>
    </section>
  )
}
