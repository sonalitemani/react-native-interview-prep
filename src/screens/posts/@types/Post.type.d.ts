type IPost = {
    title: string,
    body: string
}
type PostProps = {
    item: IPost;
    isModalVisible: boolean;
    setModalVisible: (value: boolean) => void;
}