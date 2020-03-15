import {
  FieldError,
  Form,
  Label,
  TextAreaField,
  TextField,
  Submit,
  useMutation,
} from '@redwoodjs/web'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: ContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create, { loading }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      console.log('completed!')
      alert('BAM!')
    },
  })
  const onSubmit = (data) => {
    create({ variables: { input: { ...data } } })
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label
          name="name"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Name
        </Label>
        <TextField
          name="name"
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block' }}
          validation={{ required: true }}
        />
        <FieldError name="name" style={{ color: 'red' }} />

        <Label
          name="email"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Email
        </Label>
        <TextField
          name="email"
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block' }}
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" style={{ color: 'red' }} />
        <Label
          name="message"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Message
        </Label>
        <TextAreaField
          name="message"
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block' }}
          validation={{ required: true }}
        />
        <FieldError name="message" style={{ color: 'red' }} />
        <Submit disabled={loading} style={{ display: 'block' }}>
          Save
        </Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
