import { App, Button, Card, Form, Input } from 'antd'

interface Props {}

const recipient = 'chaninlawlert@gmail.com'

const Contact: React.FC<Props> = () => {
  const { notification } = App.useApp()
  const [form] = Form.useForm()

  const onFinish = ({ email, message }: { email: string; message: string }) => {
    notification['success']({ message: 'Successfully send a email' })
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      email
    )}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
    form.resetFields()
  }

  const onFinishFailed = () => {
    notification['error']({ message: 'Failed send a email' })
  }

  return (
    <Card className="mx-4 md:mx-20" title="Contact me!">
      <Form
        form={form}
        labelCol={{ xs: 24 ,sm: 24, md: 8 }}
        wrapperCol={{ xs: 24, sm: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Your Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item label="Your message" name="message">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Contact
