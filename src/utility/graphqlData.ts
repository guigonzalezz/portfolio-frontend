
import axios from 'axios'
const URL = `${process.env.BACKEND_CMS_URL}/graphql`


//SUBSTITUIR POR UM JSON COM 1 FUNCAO SO
async function experiencesEndpoint() {
  return  await axios.post(URL,{
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
  }).then(res=>{
    return res.data;
  }).catch(e => {
    console.log("Error =>",e);
    return [];
  })
}

async function aboutEndpoint() {
  return  await axios.post(URL,{
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
    }
    `
  }).then(res=>{
    return res.data;
  }).catch(e => {
    console.log("Error =>",e);
    return [];
  })
}

async function certificationEndpoint() {
  return  await axios.post(URL,{
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
    }
    `
  }).then(res=>{
    return res.data;
  }).catch(e => {
    console.log("Error =>",e);
    return [];
  })
}

async function educationEndpoint() {
  return  await axios.post(URL,{
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
    }
    `
  }).then(res=>{
    return res.data;
  }).catch(e => {
    console.log("Error =>",e);
    return [];
  })
}


async function languageEndpoint() {
  return  await axios.post(URL,{
    query: `{
      languages {
        data {
          attributes {
             language
            level
          }
        }
      }
    }
    `
  }).then(res=>{
    return res.data;
  }).catch(e => {
    console.log("Error =>",e);
    return [];
  })
}

async function projectEndpoint() {
  return  await axios.post(URL,{
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
    }
    `
  }).then(res=>{
    return res.data;
  }).catch(e => {
    console.log("Error =>",e);
    return [];
  })
}

async function skillEndpoint() {
  return  await axios.post(URL,{
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
    }
    `
  }).then(res=>{
    return res.data;
  }).catch(e => {
    console.log("Error =>",e);
    return [];
  })
}

async function mediaEndpoint() {
  return  await axios.post(URL,{
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
    }
    `
  }).then(res=>{
    return res.data;
  }).catch(e => {
    console.log("Error =>",e);
    return [];
  })
}



export { experiencesEndpoint }