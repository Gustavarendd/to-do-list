import { Component } from './Component.js';

export class ToolTip extends Component {
  constructor(closeNotifierFn, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFn;
    this.text = text;

    this.create();
  }

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    const tooltipElementTemplate = document.getElementById('tooltip');
    const toolTipBody = document.importNode(
      tooltipElementTemplate.content,
      true,
    );
    toolTipBody.querySelector('p').textContent = this.text;
    tooltipElement.append(toolTipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElPosHeight = this.hostElement.clientHeight;
    const parentElementScroll = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElPosHeight - parentElementScroll - 10;

    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px';
    tooltipElement.style.top = y + 'px';

    tooltipElement.addEventListener('click', this.closeToolTip.bind(this));

    this.element = tooltipElement;
  }

  closeToolTip() {
    this.detach();
    this.closeNotifier();
  }
}
