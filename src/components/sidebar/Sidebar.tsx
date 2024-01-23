import React from "react"
import { Box, Typography } from "@mui/material"
import { Category } from "_types/community"
import { findCategoriesApi } from "api/community"

const Sidebar = () => {
  const [categories, setCategories] = React.useState<Array<Category>>()

  const fetchCategories = async () => {
    try {
      const response = await findCategoriesApi()
      setCategories(response.data.titles)
    } catch (e) {
      console.log("Error fetch categories")
    }
  }

  React.useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <Box sx={{ height: "100%", borderRight: "1px solid #ccc" }}>
      <Typography>사이드바임</Typography>
      {categories?.map(category => (
        <Typography key={category.categoryId}>{category.title}</Typography>
      ))}
    </Box>
  )
}

export default Sidebar
