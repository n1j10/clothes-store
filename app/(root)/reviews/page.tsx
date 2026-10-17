import Link from 'next/link';
import ReviewCard from '@/components/reviews/ReviewCard';
import SectionTitle from '@/components/global/SectionTitle';
import FormContainer from '@/components/form/FormContainer';
import IconButton from '@/components/admin/products/IconButton';
import { deleteReviewAction, fetchAllReviews, fetchUserReviews, getAuthUser } from '@/utils/api';

const ReviewsPage = async () => {
    const user = await getAuthUser();
    const isAdmin = user.role === 'ADMIN';
    // GET /reviews/all is admin only; everyone else sees their own reviews
    const reviews = isAdmin ? await fetchAllReviews() : await fetchUserReviews();

    return (
        <section className='py-12 px-4 sm:px-8'>
            <SectionTitle text={isAdmin ? 'all reviews' : 'my reviews'} />

            {reviews.length === 0 ? (
                <p className='py-12 text-center text-muted-foreground'>
                    No customer reviews yet.
                </p>
            ) : (
                <div className='grid gap-6 py-8 md:grid-cols-2 xl:grid-cols-3'>
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            reviewInfo={{
                                name: review.user?.name ?? user.name,
                                image: review.user ? review.user.imageUrl : user.imageUrl,
                                rating: review.rating,
                                comment: review.comment,
                            }}
                        >
                            <div className='px-6 pb-6 text-sm text-muted-foreground flex items-center justify-between'>
                                {review.product && (
                                    <span>
                                        Review for{' '}
                                        <Link
                                            href={`/products/${review.product.id}`}
                                            className='font-medium text-primary underline-offset-4 hover:underline'
                                        >
                                            {review.product.name}
                                        </Link>
                                    </span>
                                )}
                                {review.userId === user.id && <DeleteReview reviewId={review.id} />}
                            </div>
                        </ReviewCard>
                    ))}
                </div>
            )}
        </section>
    )
}

export default ReviewsPage

function DeleteReview({ reviewId }: { reviewId: string }) {
    const delete_review = deleteReviewAction.bind(null, { reviewId })

    return (
        <FormContainer action={delete_review}>
            <IconButton actionType={"delete"} />
        </FormContainer>
    )
}
