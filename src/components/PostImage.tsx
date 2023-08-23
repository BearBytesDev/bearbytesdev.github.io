import type React from 'react';

interface PostImageProps {
  imageUrl: string;
  altText?: string;
  imgWidth?: string;
  imgHeight?: string;
}



const PostImage: React.FC<PostImageProps> = ({ imageUrl, altText ,imgWidth , imgHeight}) => {
  return (
    <div
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        width: `${imgWidth}`,
        height: `${imgHeight}`,
      
      }}
    >
      <img
        src={imageUrl}
        alt={altText}
        style={{ width: '100%', height: '100%', objectFit: 'cover', margin:0 }}
      />
    </div>
  );
};


PostImage.defaultProps = {
    imgWidth: 'auto',
    imgHeight: 'auto', 
    altText: 'Post Image', 
  };


export default PostImage;
