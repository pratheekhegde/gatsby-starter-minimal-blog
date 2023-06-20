/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, Flex, Text } from "theme-ui"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const HeaderTitle = () => {
  const { siteTitle, siteTitleAlt } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
        <Flex sx={{ 'flex-direction': 'column'}}>
            <div sx={{ my: 0, fontWeight: `semibold`, fontSize: [3, 4] }}>{siteTitle}</div>
            <Text
                sx={{
                    fontSize: 0,
                    color: 'secondary',
                }}
                >{siteTitleAlt}</Text>
        </Flex>
    </Link>
  )
}

export default HeaderTitle