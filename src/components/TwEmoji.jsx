/**
 * Renders a vector emoji using the Twemoji SVG CDN.
 * Filters out variation selector U+FE0F so the codepoint matches the CDN filename.
 */
function getEmojiUrl(emoji) {
  const codepoints = [...emoji]
    .map(c => c.codePointAt(0))
    .filter(cp => cp !== 0xfe0f)
    .map(cp => cp.toString(16))
    .join('-');
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codepoints}.svg`;
}

export default function TwEmoji({ emoji, size = '1em', className = '', style = {} }) {
  return (
    <img
      src={getEmojiUrl(emoji)}
      alt={emoji}
      draggable={false}
      style={{
        width: size,
        height: size,
        verticalAlign: 'middle',
        display: 'inline-block',
        lineHeight: 1,
        ...style,
      }}
      className={className}
    />
  );
}
