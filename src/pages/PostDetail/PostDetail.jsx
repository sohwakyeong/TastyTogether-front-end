import React, { useEffect, useState } from 'react';
import * as S from './style/PostDetail.style';
import {
    FaRegCalendarAlt,
    FaMapMarkerAlt,
    FaRegPlusSquare,
    FaRegWindowClose,
} from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { ModalPortal } from '../../components/Modal/ModalPortal';
import { MyModal } from '../../components/Modal/MyModal';


export default function PostDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [commentContent, setCommentContent] = useState('');
    const { authRequiredAxios } = useAxios('application/json');
    const [modalInfo, setModalInfo] = useState({ show: false, type: '', message: '', action: null });

    const showModal = (type, message, action) => {
        setModalInfo({ show: true, type, message, action });
    };
    const closeModal = () => {
        setModalInfo({ ...modalInfo, show: false });
    };


    const fetchPostDetail = async () => {
        try {
            const response = await authRequiredAxios.get(`/posts/${id}`);
            setPost(response.data);
        } catch (error) {
            console.error('Error fetching post details:', error);
        }
    };

    useEffect(() => {
        fetchPostDetail();
    }, [id]);

    const fetchPostDelete = async () => {
        try {
            await authRequiredAxios.delete(`/posts/${id}`);
            navigate('/post');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    const fetchCreateComment = async () => {
        try {
            const response = await authRequiredAxios.post(`/${id}/comments`, {
                content: commentContent,
            });
            const newComment = {
                id: response.data._id,
                ...response.data,
            };
            setPost((prevPost) => ({
                ...prevPost,
                comments: [...prevPost.comments, newComment],
            }));
            setCommentContent('');
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    const fetchCommentDelete = async (commentId) => {
        try {
            await authRequiredAxios.delete(`/comments/${commentId}`);
            setPost((prevPost) => {
                return {
                    ...prevPost,
                    comments: prevPost.comments.filter((comment) => comment.id !== commentId),
                };
            });
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const handleDelete = () => {
        showModal('deletePost', '정말로 이 게시글을 삭제하시겠습니까?', fetchPostDelete);
    };

    const handleCommentDelete = (commentId) => {
        const action = () => fetchCommentDelete(commentId);
        showModal('deleteComment', '정말로 댓글을 삭제하시겠습니까?', action);
    };
    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, curr) => {
            return acc && acc[curr] ? acc[curr] : null;
        }, obj);
    };

    return (
        <S.Container>
            {modalInfo.show && (
                <ModalPortal>
                <MyModal
                    title={modalInfo.type === 'deleteComment' ? '댓글 삭제' : '게시글 삭제'}
                    message={modalInfo.message}
                    onConfirm={() => {
                        modalInfo.action && modalInfo.action(); // 설정된 action 실행
                        closeModal(); // 모달 닫기
                    }}
                    onClose={closeModal}
                />
                </ModalPortal>
            )}
            <S.DetailPost>
                <S.PostHeader>
                    <S.TitleBox>
                        <h3 className="title">
                            {getNestedValue(post, 'board.title') || 'Loading...'}😋
                        </h3>
                    </S.TitleBox>
                    <S.SetBoard>
                        <S.UserBox>
                            <span className="nickName">
                                {getNestedValue(post, 'board.userId.nickname') || 'Loading...'}
                            </span>
                            <span className="createdAt">
                                {getNestedValue(post, 'board.createdAt') || 'Loading...'}
                            </span>
                        </S.UserBox>
                        <S.ButtonBox>
                            <S.LinkButton to="/post" className="boardList">
                                목록조회
                            </S.LinkButton>
                            <button className="boardDelete" onClick={handleDelete}>
                                삭제하기
                            </button>
                        </S.ButtonBox>
                    </S.SetBoard>
                </S.PostHeader>
                <S.IconBox>
                    <S.ImageBox>
                        <S.FoodImage
                            src={getNestedValue(post, 'board.image') || 'Loading...'}
                            alt="음식사진"
                        />
                    </S.ImageBox>
                    <S.ThreeIcon>
                        <S.RegionBox>
                            <FaMapMarkerAlt />
                            <p>
                                지역:
                                <span className="region">
                                    {getNestedValue(post, 'board.region') || 'Loading...'}
                                </span>
                            </p>
                        </S.RegionBox>
                        <S.DateBox>
                            <FaRegCalendarAlt />
                            <p>
                                약속일자:
                                <span className="meetDate">
                                    {getNestedValue(post, 'board.meetDate') || 'Loading...'}
                                </span>
                            </p>
                        </S.DateBox>
                        <S.ContentBox>
                            <p className="content">
                                {getNestedValue(post, 'board.content') || 'Loading...'}
                            </p>
                        </S.ContentBox>
                    </S.ThreeIcon>
                </S.IconBox>
                <S.CommentBox>
                    {post &&
                        post.comments &&
                        post.comments.map((comment) => {
                            return (
                                <S.CommnetList key={comment.id}>
                                    <S.CommentProfile>
                                        <S.ProfileBox>
                                            <S.ProfileImg
                                                src={
                                                    getNestedValue(
                                                        comment,
                                                        'userId.profileImage',
                                                    ) || ''
                                                }
                                                alt="프로필이미지"
                                            />
                                        </S.ProfileBox>
                                        <div>
                                            <S.NickName>
                                                {getNestedValue(comment, 'userId.nickname') ||
                                                    'Unknown'}
                                            </S.NickName>
                                            <S.CommentTime>{comment.createdAt}</S.CommentTime>
                                        </div>
                                    </S.CommentProfile>
                                    <S.CommentContent>
                                        <span>{comment.content}</span>
                                        <S.DeleteBtn
                                            onClick={() => {
                                                handleCommentDelete(comment.id);
                                            }}
                                        >
                                            <FaRegWindowClose />
                                            삭제
                                        </S.DeleteBtn>
                                    </S.CommentContent>
                                </S.CommnetList>
                            );
                        })}
                </S.CommentBox>
                <S.AddComment>
                    <S.CommentAdd>
                        <S.CommnetInput
                            type="text"
                            placeholder="댓글을 입력하세요..."
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                        />
                        <S.CommentRegister onClick={fetchCreateComment}>
                            <FaRegPlusSquare />
                            등록하기
                        </S.CommentRegister>
                    </S.CommentAdd>
                </S.AddComment>
            </S.DetailPost>
        </S.Container>
    );
}
