// @flow

import React from "react";
import {
  trackIds,
  tracks,
  categoryColorScale,
  verticalIds,
  verticals,
} from "../constants";
import type { MilestoneMap, TrackId } from "../constants";

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void,
};

class TrackSelector extends React.Component<Props> {
  render() {
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}</style>
        <tbody>
          <tr style={{ display: `flex`, marginBottom: `15px` }}>
            {verticalIds.map((verticalId) => (
              <td
                key={verticalId}
                style={{
                  flex: `${verticals[verticalId].numAreas}`,
                  textAlign: `center`,
                  textTransform: `uppercase`,
                  fontSize: `12px`,
                  fontWeight: `bold`,
                }}
              >
                {verticals[verticalId].displayName}
              </td>
            ))}
          </tr>
          <tr style={{ display: `flex`, marginBottom: `3px` }}>
            {trackIds.map((trackId) => (
              <td
                key={trackId}
                className="track-selector-label"
                onClick={() => this.props.setFocusedTrackIdFn(trackId)}
                style={{ marginRight: `3px`, flex: `1` }}
              >
                {tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr style={{ display: `flex` }}>
            {trackIds.map((trackId) => (
              <td
                key={trackId}
                className="track-selector-value"
                style={{
                  marginRight: `3px`,
                  flex: `1`,
                  border:
                    "4px solid " +
                    (trackId == this.props.focusedTrackId
                      ? "rgb(37, 45, 64)"
                      : categoryColorScale(tracks[trackId].category)),
                  background: categoryColorScale(tracks[trackId].category),
                }}
                onClick={() => this.props.setFocusedTrackIdFn(trackId)}
              >
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TrackSelector;
