import * as React from "react";
import Breadcrumbs, {BreadcrumbsItem} from "@atlaskit/breadcrumbs";
import PageHeader from "@atlaskit/page-header";

const breadcrumbs = (
    <Breadcrumbs>
        <BreadcrumbsItem text="Some project" key="Some project" />
        <BreadcrumbsItem text="Parent page" key="Parent page" />
    </Breadcrumbs>
)

const Header = () => {
  return (
      <PageHeader breadcrumbs={breadcrumbs}>
          Some header test
      </PageHeader>
  )
}

export default Header
