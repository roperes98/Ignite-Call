import { Avatar, Heading, Text } from '@ignite-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { prisma } from '../../../lib/prisma'
import { ScheduleForm } from './ScheduleForm'
import { Container, UserHeader } from './styles'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    username: string
    avatarUrl: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  const originalAvatarUrl = user.avatarUrl.split('/')
  const avatarUrlWithSufix = originalAvatarUrl[originalAvatarUrl.length - 1]
  const stringParts = avatarUrlWithSufix.split('=')
  const imgString = stringParts[0]

  return (
    <>
      <NextSeo
        title={`Agendar com ${user.name} | Ignite Call`}
        openGraph={{
          title: `Agendar com ${user.name} | Ignite Call`,
          description: `Faça agendamentos de maneira descomplicada usando o Ignite Call`,
          images: [
            {
              url: `http://localhost:3000/api/og?username=${user.username}&imgString=${imgString}`,
              width: 1200,
              height: 600,
            },
          ],
        }}
      />

      <Container>
        <UserHeader>
          <Avatar src={user.avatarUrl} />
          <Heading>{user.name}</Heading>
          <Text>{user.bio}</Text>
        </UserHeader>

        <ScheduleForm />
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        username: user.username,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24,
  }
}
