const ProgressCircle = ({ progress }) => {
    const radius = 50; // Radius of the circle
    const stroke = 8; // Width of the progress arc
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        >
            <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#00BCD4" />
                    <stop offset="100%" stop-color="#8BC34A" />
                </linearGradient>
            </defs>
            <circle
                stroke="#3d3c4e"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke="url(#progressGradient)"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                transform={`rotate(-90 ${radius - 30} ${radius - 30})`}
                className="progressCircle"
            />
            <text
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
                className="progressText"
            >
                {`${progress}%`}
            </text>
        </svg>
    );
};

export default ProgressCircle;
