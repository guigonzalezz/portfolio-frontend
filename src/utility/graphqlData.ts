
import axios from 'axios'
const URL = `${process.env.BACKEND_CMS_URL}/graphql`

const data  = [
  {
    name: 'experience',
    query: `{
      experiences {
        data {
          attributes {
            company
            where
            whenstarted
            whenended
            experiencedetails {
              data {
                attributes {
                  title
                  whenstarted
                  whenended
                  description
                }
              }
            }
          }
        }
      }
    }
    `
  },
  {
    name: 'about',
    query: `{
      abouts{
        data{
          attributes{
            title
            subtitle
            description
            photo {
              data {
                attributes{
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }`
  },
  {
    name: 'certification',
    query: `{
      certifications {
        data {
          attributes {
            title
            where
            whenstarted
            whenended
            link
          }
        }
      }
    }`
  },
  {
    name: 'education',
    query: `{
      educations {
        data {
          attributes {
            title
            who
            where
            whenstarted
            whenended
          }
        }
      }
    }`
  },
  {
    name: 'language',
    query: `{
      languages {
        data {
          attributes {
             language
            level
          }
        }
      }
    }`
  },
  {
    name: 'project',
    query: `{
      projects {
        data {
          attributes {
             title
            description
            video
            application
            photos {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }`
  },
  {
    name: 'skill',
    query: `{
      skills {
        data {
          attributes {
             title
            type
            description
            photo {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }`
  },
  {
    name: 'media',
    query: `{
      medias {
        data {
          attributes {
            photo {
              data {
                attributes{
                  url
                  name
                  width
                  height
                }
              }
            }
          }
        }
      }
    }`
  }
]

async function getGraphQLData() {
  const res: { name: string; data: any; }[] = [];

  const preProcessData = (name: string, data: any) => data?.[`${name}s`].data

  await Promise.all(data.map(async item => {
    await axios.post(URL,{query: item.query})
    .then(response => {
      res.push({
        name: item.name,
        data: preProcessData(item.name, response.data.data)
      })
    })
  }))
  return res;
}



export { getGraphQLData }