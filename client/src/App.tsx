import {useState} from 'react'
import './App.css'
import {Image, List} from 'antd-mobile'
import {useQuery} from 'urql'

const users = [
  {
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
]

interface Item {
  id: number
  name: string
  url: string
}

function App() {
  const [result] = useQuery<{items: Item[]}>({
    query: `query {
      items(page: 1, pageSize: 1) {
        id
        name
        url
      }
    }
  `
  })

  const {fetching, error, data} = result;

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <List header='商品列表'>
      {data?.items.map((item) => (
        <List.Item
          key={item.name}
          prefix={
            <Image
              src={item.url}
              style={{borderRadius: 20}}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description={item.name}>
          {item.name}
        </List.Item>
      ))}
    </List>
  )
}

export default App
