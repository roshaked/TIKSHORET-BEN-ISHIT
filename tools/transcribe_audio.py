import json
import sys
from pathlib import Path

from faster_whisper import WhisperModel


def main():
    audio_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    model = WhisperModel("small", device="cpu", compute_type="int8")
    files = sorted(audio_dir.glob("*.m4a"), key=lambda path: int(path.stem.rsplit(" ", 1)[1]))
    for audio_path in files:
        if (output_dir / f"{audio_path.stem}.txt").exists() and (output_dir / f"{audio_path.stem}.json").exists():
            continue
        print(f"Transcribing {audio_path.name}", flush=True)
        segments, info = model.transcribe(
            str(audio_path),
            language="he",
            beam_size=5,
            vad_filter=True,
            condition_on_previous_text=False,
        )
        rows = [
            {"start": round(segment.start, 2), "end": round(segment.end, 2), "text": segment.text.strip()}
            for segment in segments
            if segment.text.strip()
        ]
        payload = {
            "file": audio_path.name,
            "language": info.language,
            "duration": info.duration,
            "segments": rows,
        }
        (output_dir / f"{audio_path.stem}.json").write_text(
            json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        (output_dir / f"{audio_path.stem}.txt").write_text(
            "\n".join(row["text"] for row in rows) + "\n", encoding="utf-8"
        )


if __name__ == "__main__":
    main()
