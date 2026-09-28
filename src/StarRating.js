const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
};
const starsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};
const textStyle = {
  lineHeight: `1px`,
};
export function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starsStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>s{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
