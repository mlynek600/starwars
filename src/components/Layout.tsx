import React from 'react'

import { Card, CardBody, CardHeader } from 'reactstrap'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Card className="mt-3 main-card">
    <CardHeader className="text-white bg-secondary">
      STAR WARS VIEWER
    </CardHeader>

    <CardBody className="pb-1">{children}</CardBody>
  </Card>
)

export default Layout
